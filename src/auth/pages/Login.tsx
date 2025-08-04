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

// ✅ Zod schema for login validation
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

// ✅ Type from the schema
type LoginFormInputs = z.infer<typeof loginSchema>;

export const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    setLoading(true);
    // Simulate login (replace with actual API call)
    setTimeout(() => {
      console.log('Login data', data);
      setLoading(false);
      navigate('/dashboard'); // Redirect after login
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl p-2">
        <CardHeader title="Login" className="text-center font-bold text-lg" />
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
            <Typography variant="body2" align="center">
              Don't have an account?{' '}
              <span
                className="text-blue-600 cursor-pointer underline"
                onClick={() => navigate('/auth/signup')}
              >
                Register
              </span>
            </Typography>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
