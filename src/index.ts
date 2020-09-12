import { SdkBase, sdkBuilder } from 'icetea-id-vital';
import { NativeTransporter } from './native-transporter';
import { NativeIframe } from './native-iframe';

export class Index extends SdkBase {
    public get IFrame() {
        return (this.iframe as unknown as NativeIframe).IFrame;
    }
}

export const IceteaId = sdkBuilder(Index, {
    target: 'react-native',
    baseUrl: 'http://localhost:3000',
    Transporter: NativeTransporter,
    Iframe: NativeIframe,
});
