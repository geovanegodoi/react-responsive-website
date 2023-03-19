import { Container as Doc } from '@website/components/docs';
import { Alert } from '@website/components/shared';

/* eslint-disable-next-line */
export interface AboutPageProps {}

export function AboutPage(props: AboutPageProps) {
  return (
    <Doc>
      <h2>
        <strong>About</strong>
      </h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non veniam qui
        assumenda delectus officia quidem, esse cum velit minus impedit
        aspernatur ad architecto aperiam mollitia odio. Necessitatibus, amet
        impedit. Nulla?
      </p>
      <img
        src="https://image.ibb.co/kYJK8x/showcase.jpg"
        alt="about"
        style={{ objectFit: 'cover', height: '250px' }}
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
      <Alert
        variant="success"
        message="Ratione non tempore accusantium delectus enim doloribus
          blanditiis, atque quae error, aliquid mollitia laudantium deleniti."
      />
    </Doc>
  );
}

export default AboutPage;
