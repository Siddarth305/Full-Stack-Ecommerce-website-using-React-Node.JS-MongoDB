import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

const createDefaultAdmin = async () => {
  try {
    console.log('Starting admin user creation process...');

    // First, delete any existing admin user to ensure clean slate
    await User.deleteOne({ email: 'admin@gmail.com' });
    console.log('Cleaned up any existing admin user');

    // Create the admin user directly without hashing (model will hash it)
    const adminUser = new User({
      name: 'Admin',
      email: 'admin@gmail.com',
      password: '123456',  // This will be hashed by the pre-save middleware
      isAdmin: true
    });

    await adminUser.save();

    // Verify the admin user was created
    const verifyAdmin = await User.findOne({ email: 'admin@gmail.com' });
    if (verifyAdmin) {
      console.log('✅ Admin user created successfully');
      console.log('Email: admin@gmail.com');
      console.log('Password: 123456');
      console.log('Admin status:', verifyAdmin.isAdmin);
    } else {
      throw new Error('Admin user creation failed verification');
    }

  } catch (error) {
    console.error('❌ Error in createDefaultAdmin:', error);
    // Log additional information
    try {
      const existingUser = await User.findOne({ email: 'admin@gmail.com' });
      if (existingUser) {
        console.log('Existing admin user found:', {
          id: existingUser._id,
          isAdmin: existingUser.isAdmin,
          created: existingUser.createdAt
        });
      }
    } catch (e) {
      console.error('Error checking existing user:', e);
    }
    throw error; // Re-throw to be caught by server
  }
};

export default createDefaultAdmin;
