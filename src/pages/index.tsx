// pages/index.tsx
import axios from 'axios';

export default function Home() {
  // const serverHost = 'https://api.viewup.smiledragon.dev';
  const serverHost = 'http://localhost:4000';

  const checkIdentity = () => {
    const wl = window.location;
    const redirectUrl = `${wl.protocol}//${wl.host}/result`;
    // const returnUrl = `${serverHost}/nice/decrypt/register`;
    // const returnUrl = `${serverHost}/nice/decrypt/findId`;
    const returnUrl = `${serverHost}/nice/decrypt/resetPassword`;
    const id = 'string123';

    axios
      .post(`${serverHost}/nice/encrypt/`, {
        returnUrl,
        redirectUrl,
        id,
      })
      .then(
        ({
          data: {
            data: { encodeData },
          },
        }) => {
          // encodeData =
          //   'AgAFQlI3NjVOw49CpLomhK/iV8ZPUUyl2nD7sSuTB7hYg26VSiq4DmT4eZMTBeDMGat60/QSwwS5jWFZAR8Esyl1tfy3bmEBgVKwOpFvqy8uDK2Oahahty2NoRaMX/sn6gYZaGHUcCfmHxeXyvclSUZN966Q89pVCJC8G+XBzdXzjiUUAnc0ifAV3eckmqnx13NwhA+OSh6/BaZbOMqkBi0p3lzlEVGBNl7fTAzcFsqlBUibs3nc3xJyfvnmfcdbFAZLRNuS/4x0lHEiG+Jzn1163hTgL4kScADOzIygjs01uGMV0gPus6HqzUPyBuBvIFtpuEXTxE4VdeAUCv6jMhegfuDJOBFQxer5xTBSHHxe09S5vR2VNw/vT7Lk7x4vTriEOM9/ZsFNNfrb5u0wvRb2xu+Ystwraixw83bV6eM0zJjEY9/TS5QwpqjrMn/ASWzXdoooMACZ2A8RZtoPZZHihO7qxGF+L+oYMuv5cJXsToRCFjAl6J5E8YPgQ7bQOuOurM632C95nc56kqTJ0iURcT2IfC2DkIbwky9vVVos0unkWPtBW5QkYaTEUf5wdh2Iw3ecSAMGNu5gSY4/uTIBJfKgDlorvMKekD7/mXb3ADXYW8DwM0C1pzWq3gtsiSbYB9eAneQ43deOUug4CW2YMR+ZaPNq';
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
      .catch((err) => {
        console.log(err);
        alert('본인인증에 실패했습니다.');
      });
  };

  return (
    <>
      <h2>본인인증</h2>
      <button onClick={checkIdentity}>본인인증</button>
    </>
  );
}
