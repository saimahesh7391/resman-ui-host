// File: src/components/SowDetails.tsx
import { useEffect, useState } from 'react';
import { apiClient } from '@/api/apiClient';

interface Sow {
  key: string;
  msaId: number;
  companyDocumentId: number;
  artifactId: number;
  artifactTypeId: number;
  startDate: string;
  validityTermInMonths: number;
  expireDate: string;
  noticePeriodDays: number;
  feePayTermInDays: number;
  c2hLockinTermInMonths: number;
  c2hFee: number;
  signoffDate: string;
  backgroundChecks: string;
  billingTypeId: number;
  billingRate: number;
  active: string;
  summary: string;
}

const SowDetails: React.FC = () => {
  const [sow, setSow] = useState<Sow | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const pKey =
    '636f6d2e6663732e7265736d616e6e67656e2e61646d696e2e6d6f64656c2e536f77233334';

  useEffect(() => {
    const fetchSow = async () => {
      try {
        const response = await apiClient.get('/resmanadmin/sow/getByKey', {
          params: { pKey },
        });
        console.log(response.data?.data?.[0]);
        const sowData = response.data?.data?.[0];
        if (sowData) {
          setSow(sowData);
        } else {
          setError('No SOW data found.');
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load SOW');
      } finally {
        setLoading(false);
      }
    };

    fetchSow();
  }, []);

  useEffect(() => {
    const fetchSow = async () => {
      try {
        const response = await apiClient.get('resmanadmin/sow/getSowByAll', {});
        console.log(response);
      } catch (err: any) {
        setError(err.message || 'Failed to load SOW');
      } finally {
        setLoading(false);
      }
    };

    fetchSow();
  }, []);

  if (loading) return <p>Loading SOW...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!sow) return <p>No SOW found.</p>;

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h2>SOW Details</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <tbody>
          {Object.entries(sow).map(([key, value]) => (
            <tr key={key}>
              <td
                style={{
                  border: '1px solid #ccc',
                  padding: '8px',
                  fontWeight: 'bold',
                }}
              >
                {key}
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                {String(value)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SowDetails;
