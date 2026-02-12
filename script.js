// BookLeaf Author Dashboard JavaScript

// Global Variables
let currentUser = null;
let authors = [];
let books = [];
let sales = [];
let withdrawals = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load data from localStorage
    loadDataFromStorage();
    
    // Setup event listeners
    setupEventListeners();
    
    // Check if user is already logged in
    checkLoginStatus();
}

function setupEventListeners() {
    // Login form
    document.getElementById('loginFormElement').addEventListener('submit', function(e) {
        e.preventDefault();
        login();
    });
    
    // Signup form
    document.getElementById('signupFormElement').addEventListener('submit', function(e) {
        e.preventDefault();
        signup();
    });
    
    // Withdrawal amount input validation
    document.getElementById('withdrawalAmount').addEventListener('input', function(e) {
        const maxAmount = currentUser ? currentUser.currentBalance : 0;
        if (e.target.value > maxAmount) {
            e.target.value = maxAmount;
        }
    });
}

function loadDataFromStorage() {
    console.log('Loading data from storage...');
    
    // Load authors
    const authorsData = localStorage.getItem('authors');
    console.log('Authors data from storage:', authorsData);
    
    if (authorsData) {
        authors = JSON.parse(authorsData);
        console.log('Parsed authors:', authors);
    } else {
        console.log('No authors found, initializing sample data');
        // Initialize with sample data
        initializeSampleData();
    }
    
    // Load books
    const booksData = localStorage.getItem('books');
    if (booksData) {
        books = JSON.parse(booksData);
    }
    
    // Load sales
    const salesData = localStorage.getItem('sales');
    if (salesData) {
        sales = JSON.parse(salesData);
    }
    
    // Load withdrawals
    const withdrawalsData = localStorage.getItem('withdrawals');
    if (withdrawalsData) {
        withdrawals = JSON.parse(withdrawalsData);
    }
    
    console.log('Final authors array:', authors);
}

function initializeSampleData() {
    console.log('Initializing sample data...');
    
    // Sample authors
    authors = [
        {
            id: 1,
            name: 'Amit Sharma',
            email: 'amit.sharma@email.com',
            password: 'author123', // In real app, this would be hashed
            bankAccount: '1234567890123456',
            ifsc: 'SBIN0001234',
            currentBalance: 2500
        },
        {
            id: 2,
            name: 'Priya Patel',
            email: 'priya.patel@email.com',
            password: 'author123', // In real app, this would be hashed
            bankAccount: '9876543210987654',
            ifsc: 'ICIC0005678',
            currentBalance: 350
        }
    ];
    
    // Sample books
    books = [
        { id: 1, title: 'Digital Marketing Guide', authorId: 1, royaltyPerSale: 50 },
        { id: 2, title: 'Web Development Basics', authorId: 1, royaltyPerSale: 75 },
        { id: 3, title: 'Data Science Introduction', authorId: 1, royaltyPerSale: 100 },
        { id: 4, title: 'Cooking Made Easy', authorId: 2, royaltyPerSale: 40 },
        { id: 5, title: 'Yoga for Beginners', authorId: 2, royaltyPerSale: 60 },
        { id: 6, title: 'Travel Photography', authorId: 2, royaltyPerSale: 80 }
    ];
    
    // Sample sales
    sales = [
        { id: 1, bookId: 1, saleDate: '2024-01-15', quantity: 10, royaltyEarned: 500 },
        { id: 2, bookId: 1, saleDate: '2024-01-20', quantity: 8, royaltyEarned: 400 },
        { id: 3, bookId: 2, saleDate: '2024-01-18', quantity: 6, royaltyEarned: 450 },
        { id: 4, bookId: 2, saleDate: '2024-01-25', quantity: 12, royaltyEarned: 900 },
        { id: 5, bookId: 3, saleDate: '2024-01-22', quantity: 4, royaltyEarned: 400 },
        { id: 6, bookId: 3, saleDate: '2024-01-28', quantity: 7, royaltyEarned: 700 },
        { id: 7, bookId: 4, saleDate: '2024-01-10', quantity: 5, royaltyEarned: 200 },
        { id: 8, bookId: 4, saleDate: '2024-01-16', quantity: 3, royaltyEarned: 120 },
        { id: 9, bookId: 5, saleDate: '2024-01-12', quantity: 4, royaltyEarned: 240 },
        { id: 10, bookId: 5, saleDate: '2024-01-19', quantity: 2, royaltyEarned: 120 },
        { id: 11, bookId: 6, saleDate: '2024-01-14', quantity: 1, royaltyEarned: 80 },
        { id: 12, bookId: 6, saleDate: '2024-01-21', quantity: 3, royaltyEarned: 240 }
    ];
    
    // Sample withdrawals
    withdrawals = [
        { id: 1, authorId: 1, amount: 500, requestDate: '2024-01-30', status: 'approved' },
        { id: 2, authorId: 1, amount: 800, requestDate: '2024-02-05', status: 'pending' },
        { id: 3, authorId: 2, amount: 200, requestDate: '2024-01-25', status: 'approved' },
        { id: 4, authorId: 2, amount: 400, requestDate: '2024-02-03', status: 'rejected' }
    ];
    
    // Save to localStorage
    console.log('Saving to localStorage...');
    localStorage.setItem('authors', JSON.stringify(authors));
    localStorage.setItem('books', JSON.stringify(books));
    localStorage.setItem('sales', JSON.stringify(sales));
    localStorage.setItem('withdrawals', JSON.stringify(withdrawals));
    
    console.log('Sample data initialized and saved');
    console.log('Authors saved:', authors.length);
    console.log('First author:', authors[0]);
}

function saveDataToStorage() {
    localStorage.setItem('authors', JSON.stringify(authors));
    localStorage.setItem('books', JSON.stringify(books));
    localStorage.setItem('sales', JSON.stringify(sales));
    localStorage.setItem('withdrawals', JSON.stringify(withdrawals));
}

function checkLoginStatus() {
    const loggedInUser = localStorage.getItem('currentUser');
    if (loggedInUser) {
        currentUser = JSON.parse(loggedInUser);
        showDashboard();
    } else {
        showLogin();
    }
}

// Authentication Functions
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    console.log('Login attempt:', email, password);
    console.log('Available authors:', authors);
    
    // Find author
    const author = authors.find(a => a.email === email && a.password === password);
    
    console.log('Found author:', author);
    
    if (author) {
        currentUser = author;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        showMessage('Login successful! Welcome back, ' + author.name, 'success');
        setTimeout(() => showDashboard(), 1000);
    } else {
        showMessage('Invalid email or password', 'error');
    }
}

function signup() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const bankAccount = document.getElementById('signupBankAccount').value;
    const ifsc = document.getElementById('signupIFSC').value;
    
    // Check if email already exists
    if (authors.find(a => a.email === email)) {
        showMessage('Email already exists', 'error');
        return;
    }
    
    // Create new author
    const newAuthor = {
        id: authors.length + 1,
        name: name,
        email: email,
        password: password, // In real app, this would be hashed
        bankAccount: bankAccount,
        ifsc: ifsc,
        currentBalance: 0
    };
    
    authors.push(newAuthor);
    currentUser = newAuthor;
    
    // Save to localStorage
    saveDataToStorage();
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    showMessage('Account created successfully!', 'success');
    setTimeout(() => showDashboard(), 1000);
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showLogin();
    showMessage('Logged out successfully', 'info');
}

// UI Functions
function showLogin() {
    document.getElementById('loginSection').style.display = 'flex';
    document.getElementById('dashboardSection').style.display = 'none';
    document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
}

function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

function showLoginFromSignup() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function showDashboard() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('dashboardSection').style.display = 'block';
    document.body.style.background = '#f8f9fa';
    
    // Update user info
    document.getElementById('userName').textContent = 'Welcome, ' + currentUser.name;
    
    // Load dashboard data
    loadDashboardData();
}

function loadDashboardData() {
    // Calculate summary
    const authorBooks = books.filter(b => b.authorId === currentUser.id);
    const authorSales = sales.filter(s => {
        const book = books.find(b => b.id === s.bookId);
        return book && book.authorId === currentUser.id;
    });
    
    const totalEarnings = authorSales.reduce((sum, sale) => sum + sale.royaltyEarned, 0);
    const totalBooks = authorBooks.length;
    
    // Update summary cards
    document.getElementById('totalEarnings').textContent = '₹' + totalEarnings.toLocaleString('en-IN');
    document.getElementById('currentBalance').textContent = '₹' + currentUser.currentBalance.toLocaleString('en-IN');
    document.getElementById('totalBooks').textContent = totalBooks;
    
    // Load books table
    loadBooksTable(authorBooks, authorSales);
    
    // Load recent sales
    loadRecentSales(authorSales);
    
    // Load withdrawal history
    loadWithdrawalHistory();
    
    // Update bank details
    updateBankDetails();
}

function loadBooksTable(authorBooks, authorSales) {
    const tbody = document.querySelector('#booksTable tbody');
    tbody.innerHTML = '';
    
    authorBooks.forEach(book => {
        const bookSales = authorSales.filter(s => s.bookId === book.id);
        const totalRoyalty = bookSales.reduce((sum, sale) => sum + sale.royaltyEarned, 0);
        
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${book.title}</td>
            <td>₹${book.royaltyPerSale}</td>
            <td>₹${totalRoyalty.toLocaleString('en-IN')}</td>
        `;
    });
}

function loadRecentSales(authorSales) {
    const tbody = document.querySelector('#salesTable tbody');
    tbody.innerHTML = '';
    
    // Sort by date (newest first) and take last 10
    const recentSales = authorSales
        .sort((a, b) => new Date(b.saleDate) - new Date(a.saleDate))
        .slice(0, 10);
    
    recentSales.forEach(sale => {
        const book = books.find(b => b.id === sale.bookId);
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${book ? book.title : 'Unknown Book'}</td>
            <td>${formatDate(sale.saleDate)}</td>
            <td>${sale.quantity}</td>
            <td>₹${sale.royaltyEarned.toLocaleString('en-IN')}</td>
        `;
    });
}

function loadWithdrawalHistory() {
    const tbody = document.querySelector('#withdrawalTable tbody');
    tbody.innerHTML = '';
    
    const authorWithdrawals = withdrawals
        .filter(w => w.authorId === currentUser.id)
        .sort((a, b) => new Date(b.requestDate) - new Date(a.requestDate));
    
    authorWithdrawals.forEach(withdrawal => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>₹${withdrawal.amount.toLocaleString('en-IN')}</td>
            <td>${formatDate(withdrawal.requestDate)}</td>
            <td><span class="status-badge status-${withdrawal.status}">${withdrawal.status}</span></td>
        `;
    });
}

function updateBankDetails() {
    const bankDetails = document.getElementById('bankDetails');
    const maskedAccount = 'XXXX' + currentUser.bankAccount.slice(-4);
    bankDetails.textContent = `Account: ${maskedAccount} | IFSC: ${currentUser.ifsc}`;
}

// Withdrawal Functions
function requestWithdrawal() {
    const amount = parseFloat(document.getElementById('withdrawalAmount').value);
    
    if (!amount || amount < 500) {
        showMessage('Minimum withdrawal amount is ₹500', 'error');
        return;
    }
    
    if (amount > currentUser.currentBalance) {
        showMessage('Insufficient balance', 'error');
        return;
    }
    
    // Confirm withdrawal
    if (!confirm(`Are you sure you want to withdraw ₹${amount.toLocaleString('en-IN')}?`)) {
        return;
    }
    
    // Create withdrawal request
    const newWithdrawal = {
        id: withdrawals.length + 1,
        authorId: currentUser.id,
        amount: amount,
        requestDate: new Date().toISOString().split('T')[0],
        status: 'pending'
    };
    
    withdrawals.push(newWithdrawal);
    
    // Update author balance
    currentUser.currentBalance -= amount;
    const authorIndex = authors.findIndex(a => a.id === currentUser.id);
    authors[authorIndex] = currentUser;
    
    // Save to localStorage
    saveDataToStorage();
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Clear form
    document.getElementById('withdrawalAmount').value = '';
    
    // Show success message
    showMessage('Withdrawal request submitted successfully!', 'success');
    
    // Reload dashboard data
    loadDashboardData();
}

// Utility Functions
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
}

function showMessage(message, type) {
    const container = document.getElementById('messageContainer');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    
    const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle';
    messageDiv.innerHTML = `<i class="fas fa-${icon}"></i> ${message}`;
    
    container.appendChild(messageDiv);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

function showLoading() {
    document.getElementById('loadingOverlay').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loadingOverlay').style.display = 'none';
}

// Helper function for switching between forms
function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginSection').style.display = 'flex';
    document.getElementById('dashboardSection').style.display = 'none';
    document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
}

// Fix the showLoginFromSignup function name
function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginSection').style.display = 'flex';
    document.getElementById('dashboardSection').style.display = 'none';
    document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
}

function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}
