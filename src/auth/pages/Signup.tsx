import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// ✅ Zod schema for signup validation
const signupSchema = z
  .object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

// ✅ Type from schema
type SignupFormInputs = z.infer<typeof signupSchema>;

export const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormInputs) => {
    setLoading(true);
    // Simulate signup (replace with real API call)
    setTimeout(() => {
      console.log('Signup data', data);
      setLoading(false);
      navigate('/login'); // After signup, redirect to login
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl p-2">
        <CardHeader title="Signup" className="text-center font-bold text-lg" />
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <TextField
              label="Name"
              fullWidth
              {...register('name')}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              label="Email"
              fullWidth
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              {...register('confirmPassword')}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
            >
              {loading ? 'Signing up...' : 'Signup'}
            </Button>
            <Typography variant="body2" align="center">
              Already have an account?{' '}
              <span
                className="text-blue-600 cursor-pointer underline"
                onClick={() => navigate('/auth/login')}
              >
                Login
              </span>
            </Typography>
            <Typography variant="body2" align="center">
              Forgot Password?{' '}
              <span
                className="text-blue-600 cursor-pointer underline"
                onClick={() => navigate('/auth/forgot-password')}
              >
                Forgot Password
              </span>
            </Typography>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
