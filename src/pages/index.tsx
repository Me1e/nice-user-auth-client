// pages/index.tsx
import axios from 'axios';

export default function Home() {
  const serverHost = 'http://localhost:4000';

  const checkIdentity = () => {
    const wl = window.location;
    const redirectUrl = `${wl.protocol}//${wl.host}/result`;
    const returnUrl = `${serverHost}/nice/decrypt?redirectUrl=${redirectUrl}`;

    axios
      .post(`${serverHost}/nice/encrypt/`, {
        returnUrl,
      })
      .then(
        ({
          data: {
            data: { encodeData },
          },
        }) => {
          const form = document.createElement('form');
          form.action =
            'https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb';
          form.method = 'post';
          form.name = 'form_chk';
          const encodeDataInput = document.createElement('input');
          encodeDataInput.type = 'hidden';
          encodeDataInput.name = 'EncodeData';
          encodeDataInput.value = encodeData;
          const mInput = document.createElement('input');
          mInput.type = 'hidden';
          mInput.name = 'm';
          mInput.value = 'checkplusService';
          form.appendChild(encodeDataInput);
          form.appendChild(mInput);
          document.body.appendChild(form);
          form.submit();
        }
      )
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2>본인인증</h2>
      <button onClick={checkIdentity}>본인인증</button>
    </>
  );
}
