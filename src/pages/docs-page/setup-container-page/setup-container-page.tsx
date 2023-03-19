import { Container as Doc } from '@website/components/docs';
import { Alert, Code } from '@website/components/shared';
import docker from '/assets/docker.png';

/* eslint-disable-next-line */
export interface SetupContainerPageProps {}

export function SetupContainerPage(props: SetupContainerPageProps) {
  return (
    <Doc>
      <h2>
        <strong>Setting up a container</strong>
      </h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non veniam qui
        assumenda delectus officia quidem, esse cum velit minus impedit
        aspernatur ad architecto aperiam mollitia odio. Necessitatibus, amet
        impedit. Nulla?
      </p>
      <img
        src={docker}
        alt="docker"
        style={{
          objectFit: 'cover',
          objectPosition: '0 0',
          height: '250px',
        }}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ut
        obcaecati, ipsa placeat quis similique in voluptatum aspernatur quam,
        odit itaque ullam. Asperiores quos placeat accusantium ipsam ex culpa
        consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perspiciatis ut obcaecati, ipsa placeat quis similique in voluptatum
        aspernatur quam, odit itaque ullam. Asperiores quos placeat accusantium
        ipsam ex culpa consequuntur!
      </p>
      <h3>Runnning your first container</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Code>$ docker pull image_name</Code>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Code>$ docker image ls</Code>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Code>$ docker image rm $(docker images -a -q)</Code>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ut
        obcaecati, ipsa placeat quis similique in voluptatum aspernatur quam,
        odit itaque ullam. Asperiores quos placeat accusantium ipsam ex culpa
        consequuntur!
      </p>
      <Code>$ docker run -i -t image_name /bin/bash</Code>
      <p>
        Asperiores quos placeat accusantium ipsam ex culpa consequuntur! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ut
        obcaecati, ipsa placeat quis similique in voluptatum aspernatur quam,
        odit itaque ullam.
      </p>
      <Alert
        variant="success"
        message="Ratione non tempore accusantium delectus enim doloribus
          blanditiis, atque quae error, aliquid mollitia laudantium deleniti."
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ut
        obcaecati, ipsa placeat quis similique in voluptatum aspernatur quam,
        odit itaque ullam. Asperiores quos placeat accusantium ipsam ex culpa
        consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perspiciatis ut obcaecati, ipsa placeat quis similique in voluptatum
        aspernatur quam, odit itaque ullam. Asperiores quos placeat accusantium
        ipsam ex culpa consequuntur!
      </p>
    </Doc>
  );
}

export default SetupContainerPage;
