# AI Training Profile - API Contracts & Backend Implementation Plan

## Current Frontend Implementation
The frontend is fully functional with mock data including:
- Hero section with professional trainer photo
- AI Tools expertise showcase (50+ tools)
- Training programs overview
- Training gallery with real session photos
- Success stories with testimonials
- Contact form (currently using mock submission)
- Responsive design with smooth animations

## Backend APIs to Implement

### 1. Contact Form Submission
**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": string,
  "email": string,
  "company": string (optional),
  "trainingType": string (optional),
  "participants": string (optional),
  "message": string
}
```

**Response:**
```json
{
  "success": boolean,
  "message": string,
  "id": string
}
```

**Database Collection:** `contact_inquiries`
**Features:**
- Store all contact form submissions
- Email notification to Viren
- Auto-response to inquirer
- Timestamp tracking

### 2. Newsletter/Updates Subscription (Future Enhancement)
**Endpoint:** `POST /api/subscribe`

**Request Body:**
```json
{
  "email": string,
  "interests": array
}
```

### 3. Training Booking System (Future Enhancement)
**Endpoint:** `POST /api/book-training`

**Request Body:**
```json
{
  "contactInfo": object,
  "trainingProgram": string,
  "preferredDates": array,
  "teamSize": number,
  "requirements": string
}
```

## Current Mock Data Integration Points

### Frontend Mock Data (src/mock/mockData.js):
- Trainer profile information
- Success stories and testimonials
- Training programs details
- AI tools categorization
- Contact information

### Integration Strategy:
1. **Phase 1:** Implement contact form backend
2. **Phase 2:** Add email notifications
3. **Phase 3:** Create admin dashboard for inquiries
4. **Phase 4:** Enhanced booking system

## Email Integration Requirements
- SMTP configuration for notifications
- Template system for responses
- Auto-acknowledgment for inquiries
- Admin notifications for new submissions

## Database Schema

### Contact Inquiries Collection:
```json
{
  "_id": ObjectId,
  "name": string,
  "email": string,
  "company": string,
  "trainingType": string,
  "participants": string,
  "message": string,
  "status": string, // "new", "contacted", "closed"
  "createdAt": Date,
  "updatedAt": Date
}
```

## Frontend Components to Update Post-Backend:
1. **Contact.jsx:** Remove mock submission, integrate real API
2. **Add success/error notifications using sonner toasts**
3. **Form validation and loading states**

## Testing Requirements:
- Form submission validation
- Email delivery confirmation
- Error handling for failed submissions
- Database connectivity verification

This contracts file will guide the seamless backend integration while maintaining the current frontend functionality.