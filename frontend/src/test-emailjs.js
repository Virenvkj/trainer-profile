// EmailJS Test Script - Run in browser console
// This script tests if EmailJS is properly configured

const testEmailJS = async () => {
  console.log('🧪 Testing EmailJS Configuration...');
  
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    company: 'Test Company',
    training_type: 'AI Fundamentals',
    participants: '10-15 people',
    message: 'This is a test message from the EmailJS integration test.'
  };
  
  // Check if EmailJS credentials are set
  const serviceId = 'service_oo20spc';
  const templateId = 'template_h3qokcs';
  const publicKey = 'YXudShlkM8U_c_rGu';
  
  console.log('📋 Configuration:');
  console.log('Service ID:', serviceId);
  console.log('Template ID:', templateId);
  console.log('Public Key:', publicKey);
  
  try {
    // Test EmailJS send
    const templateParams = {
      to_name: 'Viren Gajjar',
      from_name: testData.name,
      from_email: testData.email,
      company: testData.company,
      training_type: testData.training_type,
      participants: testData.participants,
      message: testData.message,
      reply_to: testData.email
    };
    
    console.log('📧 Sending test email...');
    const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    
    console.log('✅ Success! EmailJS is working correctly');
    console.log('Result:', result);
    return result;
    
  } catch (error) {
    console.error('❌ Error testing EmailJS:', error);
    console.log('🔍 Troubleshooting:');
    console.log('1. Check if service ID is correct');
    console.log('2. Check if template ID is correct');
    console.log('3. Check if public key is correct');
    console.log('4. Verify template variables match');
    return error;
  }
};

// Run the test
testEmailJS();
