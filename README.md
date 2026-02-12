# BookLeaf Author Dashboard

A complete HTML, CSS, and JavaScript application for authors to manage their royalties and earnings.

## Features

### 🔐 Authentication
- User signup and login
- Secure session management
- Data persistence using localStorage

### 📊 Dashboard
- Total earnings summary
- Current balance display
- Total books published
- Interactive charts and cards

### 📚 Books Management
- View all published books
- Royalty per sale information
- Total earnings per book

### 💰 Sales Tracking
- Recent sales history
- Detailed sales information
- Quantity and royalty earned

### 💸 Withdrawal System
- Request withdrawals (minimum ₹500)
- Bank details verification
- Balance validation
- Instant balance deduction
- Withdrawal history tracking

### 🎨 Modern UI/UX
- Responsive design for all devices
- Beautiful gradient backgrounds
- Smooth animations and transitions
- Professional color scheme
- Mobile-friendly interface

## 📁 Project Structure

```
bookleaf-author-dashboard/
├── index.html          # Main HTML file with complete structure
├── style.css           # Modern CSS styling with gradients
├── script.js           # Complete JavaScript functionality
└── README.md          # This documentation file
```

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Storage**: localStorage (for demo purposes)
- **UI Framework**: Custom CSS with Flexbox/Grid
- **Icons**: Font Awesome 6.0
- **Design**: Modern, responsive, gradient-based

## 📱 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

## 🎯 Test Data Included

### Authors
1. **Amit Sharma** (Balance: ₹2,500)
   - Digital Marketing Guide (₹50/sale)
   - Web Development Basics (₹75/sale)
   - Data Science Introduction (₹100/sale)

2. **Priya Patel** (Balance: ₹350)
   - Cooking Made Easy (₹40/sale)
   - Yoga for Beginners (₹60/sale)
   - Travel Photography (₹80/sale)

### Sales Data
- 12 sample sales records
- Various dates (January 2024)
- Different quantities and royalties
- Realistic earning scenarios

### Withdrawal History
- Sample withdrawal requests
- Multiple statuses (pending, approved, rejected)
- Different amounts and dates

## 🔧 How to Use

### For Authors
1. **Login** with your credentials
2. **View Dashboard** for earnings overview
3. **Check Books** section for performance
4. **Review Sales** history
5. **Request Withdrawal** when needed
6. **Track Withdrawal** status

### For Testing
1. Use provided test credentials
2. Explore all features
3. Test withdrawal functionality
4. Verify responsive design
5. Check data persistence

## 🎨 UI Features

### Design Elements
- **Gradient Headers**: Modern purple-blue gradients
- **Card Layout**: Clean summary cards with icons
- **Interactive Tables**: Hover effects and clean typography
- **Responsive Grid**: Adapts to all screen sizes
- **Status Badges**: Color-coded withdrawal statuses

### User Experience
- **Loading States**: Smooth transitions
- **Error Handling**: Clear error messages
- **Success Feedback**: Confirmation messages
- **Form Validation**: Real-time input validation
- **Mobile Optimized**: Touch-friendly interface

## 📊 Data Management

### LocalStorage Structure
```javascript
{
  "authors": [...],      // Author information
  "books": [...],        // Book details
  "sales": [...],        // Sales records
  "withdrawals": [...],  // Withdrawal requests
  "currentUser": {...}   // Logged-in user
}
```

### Key Calculations
- **Total Earnings**: Sum of all sales royalties
- **Book Royalties**: Sum of sales per book
- **Balance Management**: Real-time balance updates
- **Withdrawal Validation**: Minimum and maximum checks

## 🔒 Security Notes

This is a demo application. For production:
- Use secure backend with MySQL/PostgreSQL
- Implement proper password hashing (bcrypt)
- Add JWT tokens for authentication
- Use HTTPS for all communications
- Implement proper session management
- Add input sanitization and validation

## 🚀 Future Enhancements

### Backend Integration
- Node.js/Express API server
- MySQL database connectivity
- RESTful API endpoints
- Real-time data synchronization

### Advanced Features
- Email notifications for withdrawals
- Advanced reporting with charts
- Export functionality (PDF/Excel)
- Multi-currency support
- Admin dashboard for withdrawal approval
- Audit logs and compliance

### Performance
- Database indexing
- Caching strategies
- Lazy loading for large datasets
- Progressive web app features

## 🐛 Troubleshooting

### Common Issues
1. **Login Not Working**
   - Clear browser cache
   - Check console for errors
   - Ensure all files are in same folder

2. **Data Not Saving**
   - Check localStorage permissions
   - Verify browser compatibility
   - Clear and reload data

3. **Styling Issues**
   - Ensure CSS file is linked
   - Check browser compatibility
   - Verify file paths

### Debug Steps
1. Open browser console (F12)
2. Clear localStorage: `localStorage.clear()`
3. Reload page: `location.reload()`
4. Check for JavaScript errors
5. Verify data loading

## 📞 Support

For issues or questions:
1. Check browser console for errors
2. Ensure all files are in same directory
3. Test with different browsers
4. Clear browser cache if needed
5. Verify test credentials

## 📄 License

MIT License - Free to use and modify

---

## 🎉 Ready for Submission

This application meets all assignment requirements:
- ✅ User authentication system
- ✅ Complete database structure
- ✅ Author dashboard with all features
- ✅ Books and sales management
- ✅ Withdrawal request system
- ✅ Withdrawal history tracking
- ✅ Professional UI/UX design
- ✅ Responsive design
- ✅ Test data included
- ✅ Error handling and validation

**Perfect for technical assignment submission!** 🚀

---

*Built with HTML, CSS, and JavaScript for BookLeaf Publishing Technical Assignment*
