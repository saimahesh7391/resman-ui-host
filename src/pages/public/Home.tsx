import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Resman UI</h1>
      <p className="text-lg text-center max-w-md">
        This is the home page of our application. Here you can find various
        features and functionalities that we offer. Explore and enjoy your stay!
      </p>
      <Stack direction="row" spacing={3}>
        <Link to="/about" className="text-blue-600 hover:underline">
          About
        </Link>
        <Link to="/contact" className="text-blue-600 hover:underline">
          Contact
        </Link>
        <Link to="/auth/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </Stack>
    </div>
  );
};
