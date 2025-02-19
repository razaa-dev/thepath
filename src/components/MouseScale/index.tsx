import styles from './page.module.scss';
import { projects } from '../../dataMouse';
import Double from '../double';



export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Experienced in implementing both monolithic and microservices architectures .</h1>
      <div className={styles.gallery}>
        <Double projects={[projects[0], projects[1]]} reversed={false} />
        {/*<Double projects={[projects[2], projects[3]]} reversed={true} />
        <Double projects={[projects[4], projects[5]]} reversed={false} />
        <Double projects={[projects[6], projects[7]]} reversed={true} /> */}
      </div>
    </main>
  );
}
