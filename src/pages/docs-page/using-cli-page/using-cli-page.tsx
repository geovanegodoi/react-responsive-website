import styles from './using-cli-page.module.css';
import { Container as Doc } from '@website/components/docs';
import { Code } from '@website/components/shared';

/* eslint-disable-next-line */
export interface UsingCliPageProps {}

export function UsingCliPage(props: UsingCliPageProps) {
  return (
    <Doc>
      <h2>
        <strong>Using CLI</strong>
      </h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <h3>First steps</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        porttitor cursus scelerisque. Suspendisse aliquam nisl sed ipsum tempor,
        quis placerat justo consectetur.
      </p>
      <Code>$ npx nx init</Code>
      <p>
        Maecenas fringilla velit efficitur ipsum tincidunt aliquam. Nunc quis
        ante sollicitudin, finibus justo et, suscipit lorem. Fusce ut pretium
        erat. Donec ut turpis eleifend, rhoncus eros et, finibus sapien.
      </p>
      <Code>$ ng add @nrwl/angular@latest</Code>
      <p>
        Nulla volutpat efficitur odio sit amet varius. Curabitur vel nunc
        imperdiet, mattis sapien vitae, dignissim eros. Proin sit amet gravida
        ligula.
      </p>
      <Code>$ npx create-nx-workspace myorg --preset=angular-standalone</Code>
      <p>
        Aliquam eu posuere sapien. Vivamus sit amet sodales arcu, eu ornare
        tellus. Donec pellentesque fermentum odio, eu cursus ante imperdiet
        vitae.
      </p>
      <Code>$ ng serve \"app name\"</Code>
      <p>
        Praesent sagittis ex libero, malesuada consequat urna egestas vel. Nam
        sed quam varius, malesuada ipsum vel, imperdiet sem.
      </p>
      <Code>$ npm run lint</Code>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        porttitor cursus scelerisque. Suspendisse aliquam nisl sed ipsum tempor,
        quis placerat justo consectetur. Maecenas fringilla velit efficitur
        ipsum tincidunt aliquam. Nunc quis ante sollicitudin, finibus justo et,
        suscipit lorem. Fusce ut pretium erat. Donec ut turpis eleifend, rhoncus
        eros et, finibus sapien. Nullam semper justo a malesuada suscipit.
        Praesent ac dui ac quam ullamcorper ultrices. Nulla volutpat efficitur
        odio sit amet varius. Curabitur vel nunc imperdiet, mattis sapien vitae,
        dignissim eros. Proin sit amet gravida ligula.
      </p>
    </Doc>
  );
}

export default UsingCliPage;
