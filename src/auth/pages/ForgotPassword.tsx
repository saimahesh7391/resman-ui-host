import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
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

// ✅ Zod schema for forgot password
const forgotPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type ForgotPasswordFormInputs = z.infer<typeof forgotPasswordSchema>;

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormInputs>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordFormInputs) => {
    setLoading(true);
    // Simulate email send request (replace with real API)
    setTimeout(() => {
      console.log('Forgot password request', data);
      setLoading(false);
      alert('Password reset link sent to your email (simulated)');
      navigate('/login');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl p-2">
        <CardHeader
          title="Forgot Password"
          className="text-center font-bold text-lg"
        />
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Reset'}
            </Button>
            <Typography variant="body2" align="center">
              Back to{' '}
              <span
                className="text-blue-600 cursor-pointer underline"
                onClick={() => navigate('/auth/login')}
              >
                Login
              </span>
            </Typography>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;
