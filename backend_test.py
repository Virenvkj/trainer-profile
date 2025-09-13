#!/usr/bin/env python3
"""
Backend API Testing for AI Training Profile Website
Tests the Contact Form API endpoints and database functionality
"""

import requests
import json
import time
from datetime import datetime
import uuid

# Configuration
BASE_URL = "https://viren-training.preview.emergentagent.com/api"
HEADERS = {"Content-Type": "application/json"}

class BackendTester:
    def __init__(self):
        self.test_results = []
        self.failed_tests = []
        self.passed_tests = []
        
    def log_test(self, test_name, passed, message, details=None):
        """Log test results"""
        result = {
            "test": test_name,
            "passed": passed,
            "message": message,
            "details": details,
            "timestamp": datetime.now().isoformat()
        }
        self.test_results.append(result)
        
        if passed:
            self.passed_tests.append(test_name)
            print(f"✅ {test_name}: {message}")
        else:
            self.failed_tests.append(test_name)
            print(f"❌ {test_name}: {message}")
            if details:
                print(f"   Details: {details}")
    
    def test_api_connectivity(self):
        """Test basic API connectivity"""
        try:
            response = requests.get(f"{BASE_URL}/", timeout=10)
            if response.status_code == 200:
                self.log_test("API Connectivity", True, "API is accessible")
                return True
            else:
                self.log_test("API Connectivity", False, f"API returned status {response.status_code}")
                return False
        except Exception as e:
            self.log_test("API Connectivity", False, f"Failed to connect to API: {str(e)}")
            return False
    
    def test_valid_contact_form_submission(self):
        """Test valid contact form submission with all required fields"""
        test_data = {
            "name": "John Smith",
            "email": "john@company.com",
            "company": "Tech Corp",
            "training_type": "productivity",
            "participants": "20-30 people",
            "message": "We need AI training for our sales team"
        }
        
        try:
            response = requests.post(f"{BASE_URL}/contact", json=test_data, headers=HEADERS, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                # Check response structure
                if all(key in data for key in ["success", "message", "id"]):
                    if data["success"] and data["id"]:
                        self.log_test("Valid Contact Form Submission", True, 
                                    f"Form submitted successfully with ID: {data['id']}")
                        return data["id"]  # Return ID for database verification
                    else:
                        self.log_test("Valid Contact Form Submission", False, 
                                    f"API returned success=False: {data.get('message', 'No message')}")
                        return None
                else:
                    self.log_test("Valid Contact Form Submission", False, 
                                f"Invalid response structure: {data}")
                    return None
            else:
                self.log_test("Valid Contact Form Submission", False, 
                            f"HTTP {response.status_code}: {response.text}")
                return None
                
        except Exception as e:
            self.log_test("Valid Contact Form Submission", False, f"Request failed: {str(e)}")
            return None
    
    def test_missing_required_fields(self):
        """Test form submission with missing required fields"""
        
        # Test missing name
        test_data_no_name = {
            "email": "john@company.com",
            "company": "Tech Corp",
            "message": "Test message"
        }
        
        try:
            response = requests.post(f"{BASE_URL}/contact", json=test_data_no_name, headers=HEADERS, timeout=10)
            if response.status_code == 422:  # FastAPI validation error
                self.log_test("Missing Name Field", True, "Correctly rejected submission with missing name")
            else:
                self.log_test("Missing Name Field", False, 
                            f"Expected 422 validation error, got {response.status_code}")
        except Exception as e:
            self.log_test("Missing Name Field", False, f"Request failed: {str(e)}")
        
        # Test missing email
        test_data_no_email = {
            "name": "John Smith",
            "company": "Tech Corp",
            "message": "Test message"
        }
        
        try:
            response = requests.post(f"{BASE_URL}/contact", json=test_data_no_email, headers=HEADERS, timeout=10)
            if response.status_code == 422:  # FastAPI validation error
                self.log_test("Missing Email Field", True, "Correctly rejected submission with missing email")
            else:
                self.log_test("Missing Email Field", False, 
                            f"Expected 422 validation error, got {response.status_code}")
        except Exception as e:
            self.log_test("Missing Email Field", False, f"Request failed: {str(e)}")
        
        # Test missing message
        test_data_no_message = {
            "name": "John Smith",
            "email": "john@company.com",
            "company": "Tech Corp"
        }
        
        try:
            response = requests.post(f"{BASE_URL}/contact", json=test_data_no_message, headers=HEADERS, timeout=10)
            if response.status_code == 422:  # FastAPI validation error
                self.log_test("Missing Message Field", True, "Correctly rejected submission with missing message")
            else:
                self.log_test("Missing Message Field", False, 
                            f"Expected 422 validation error, got {response.status_code}")
        except Exception as e:
            self.log_test("Missing Message Field", False, f"Request failed: {str(e)}")
    
    def test_invalid_email_format(self):
        """Test form submission with invalid email format"""
        test_data = {
            "name": "John Smith",
            "email": "invalid-email-format",
            "company": "Tech Corp",
            "message": "Test message"
        }
        
        try:
            response = requests.post(f"{BASE_URL}/contact", json=test_data, headers=HEADERS, timeout=10)
            # Note: FastAPI with Pydantic doesn't automatically validate email format unless specified
            # This test checks if email validation is implemented
            if response.status_code == 422:
                self.log_test("Invalid Email Format", True, "Correctly rejected invalid email format")
            elif response.status_code == 200:
                data = response.json()
                if not data.get("success", False):
                    self.log_test("Invalid Email Format", True, "API handled invalid email gracefully")
                else:
                    self.log_test("Invalid Email Format", False, 
                                "API accepted invalid email format - email validation may be missing")
            else:
                self.log_test("Invalid Email Format", False, 
                            f"Unexpected response: {response.status_code}")
        except Exception as e:
            self.log_test("Invalid Email Format", False, f"Request failed: {str(e)}")
    
    def test_admin_get_endpoint(self):
        """Test GET /api/contact endpoint for admin access"""
        try:
            response = requests.get(f"{BASE_URL}/contact", headers=HEADERS, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("Admin GET Endpoint", True, 
                                f"Successfully retrieved {len(data)} contact inquiries")
                    
                    # Check if data is sorted by created_at (most recent first)
                    if len(data) > 1:
                        dates = [item.get('created_at') for item in data if 'created_at' in item]
                        if dates and len(dates) > 1:
                            # Check if sorted in descending order (newest first)
                            is_sorted = all(dates[i] >= dates[i+1] for i in range(len(dates)-1))
                            if is_sorted:
                                self.log_test("Data Sorting", True, "Contact inquiries properly sorted by created_at")
                            else:
                                self.log_test("Data Sorting", False, "Contact inquiries not properly sorted")
                    
                    return data
                else:
                    self.log_test("Admin GET Endpoint", False, f"Expected list, got: {type(data)}")
                    return None
            else:
                self.log_test("Admin GET Endpoint", False, 
                            f"HTTP {response.status_code}: {response.text}")
                return None
                
        except Exception as e:
            self.log_test("Admin GET Endpoint", False, f"Request failed: {str(e)}")
            return None
    
    def test_database_verification(self, submission_id):
        """Verify that submitted data is properly stored in database"""
        if not submission_id:
            self.log_test("Database Verification", False, "No submission ID to verify")
            return
        
        # Get all inquiries and look for our submission
        inquiries = self.test_admin_get_endpoint()
        if inquiries is None:
            self.log_test("Database Verification", False, "Could not retrieve inquiries for verification")
            return
        
        # Look for our submission
        found_inquiry = None
        for inquiry in inquiries:
            if inquiry.get('id') == submission_id:
                found_inquiry = inquiry
                break
        
        if found_inquiry:
            # Verify all expected fields are present
            expected_fields = ['id', 'name', 'email', 'company', 'training_type', 
                             'participants', 'message', 'status', 'created_at', 'updated_at']
            missing_fields = [field for field in expected_fields if field not in found_inquiry]
            
            if not missing_fields:
                # Verify field values match what we submitted
                if (found_inquiry['name'] == "John Smith" and 
                    found_inquiry['email'] == "john@company.com" and
                    found_inquiry['company'] == "Tech Corp" and
                    found_inquiry['training_type'] == "productivity" and
                    found_inquiry['participants'] == "20-30 people" and
                    found_inquiry['message'] == "We need AI training for our sales team"):
                    
                    self.log_test("Database Verification", True, 
                                "All form data correctly stored in database")
                else:
                    self.log_test("Database Verification", False, 
                                "Form data in database doesn't match submitted data")
            else:
                self.log_test("Database Verification", False, 
                            f"Missing fields in database: {missing_fields}")
        else:
            self.log_test("Database Verification", False, 
                        f"Submitted inquiry with ID {submission_id} not found in database")
    
    def test_multiple_submissions(self):
        """Test multiple contact form submissions to verify system stability"""
        success_count = 0
        total_submissions = 3
        
        for i in range(total_submissions):
            test_data = {
                "name": f"Test User {i+1}",
                "email": f"testuser{i+1}@example.com",
                "company": f"Test Company {i+1}",
                "training_type": "productivity",
                "participants": "10-15 people",
                "message": f"Test message number {i+1}"
            }
            
            try:
                response = requests.post(f"{BASE_URL}/contact", json=test_data, headers=HEADERS, timeout=10)
                if response.status_code == 200:
                    data = response.json()
                    if data.get("success"):
                        success_count += 1
                time.sleep(1)  # Small delay between requests
            except Exception as e:
                print(f"   Submission {i+1} failed: {str(e)}")
        
        if success_count == total_submissions:
            self.log_test("Multiple Submissions", True, 
                        f"All {total_submissions} submissions successful")
        else:
            self.log_test("Multiple Submissions", False, 
                        f"Only {success_count}/{total_submissions} submissions successful")
    
    def run_all_tests(self):
        """Run all backend tests"""
        print("🚀 Starting Backend API Tests for AI Training Profile Website")
        print("=" * 70)
        
        # Test API connectivity first
        if not self.test_api_connectivity():
            print("\n❌ Cannot proceed with tests - API is not accessible")
            return self.generate_report()
        
        print("\n📋 Testing Contact Form API Endpoints...")
        
        # Test valid submission and get ID for database verification
        submission_id = self.test_valid_contact_form_submission()
        
        # Test error handling
        print("\n🔍 Testing Error Handling...")
        self.test_missing_required_fields()
        self.test_invalid_email_format()
        
        # Test admin endpoint
        print("\n👨‍💼 Testing Admin Endpoints...")
        self.test_admin_get_endpoint()
        
        # Test database verification
        print("\n🗄️ Testing Database Storage...")
        self.test_database_verification(submission_id)
        
        # Test system stability
        print("\n⚡ Testing System Stability...")
        self.test_multiple_submissions()
        
        return self.generate_report()
    
    def generate_report(self):
        """Generate final test report"""
        print("\n" + "=" * 70)
        print("📊 BACKEND TEST RESULTS SUMMARY")
        print("=" * 70)
        
        total_tests = len(self.test_results)
        passed_count = len(self.passed_tests)
        failed_count = len(self.failed_tests)
        
        print(f"Total Tests: {total_tests}")
        print(f"Passed: {passed_count}")
        print(f"Failed: {failed_count}")
        print(f"Success Rate: {(passed_count/total_tests*100):.1f}%" if total_tests > 0 else "0%")
        
        if self.failed_tests:
            print(f"\n❌ Failed Tests:")
            for test in self.failed_tests:
                print(f"   - {test}")
        
        if self.passed_tests:
            print(f"\n✅ Passed Tests:")
            for test in self.passed_tests:
                print(f"   - {test}")
        
        print("\n" + "=" * 70)
        
        return {
            "total_tests": total_tests,
            "passed": passed_count,
            "failed": failed_count,
            "success_rate": (passed_count/total_tests*100) if total_tests > 0 else 0,
            "failed_tests": self.failed_tests,
            "passed_tests": self.passed_tests,
            "detailed_results": self.test_results
        }

if __name__ == "__main__":
    tester = BackendTester()
    results = tester.run_all_tests()
    
    # Exit with error code if tests failed
    if results["failed"] > 0:
        exit(1)
    else:
        exit(0)