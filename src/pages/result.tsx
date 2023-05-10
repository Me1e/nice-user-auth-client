// pages/result.tsx
import { useRouter } from 'next/router';

export default function Result() {
  const info = useRouter().query;

  return (
    <>
      <h2>인증성공!</h2>
      <table>
        <tbody>
          {info &&
            Object.entries(info).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
