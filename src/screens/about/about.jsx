
import person from './../../assets/person.png'; // Adjust the path based on your folder structure
import styles from './style.module.css';
const AboutScreen = () => {
    return (
        <div className="col-12 position-static text-white " >
            <section>

                <h2 className="text-white">About us</h2>
                <p className={styles.content}>LeadX Bull stays current with the market trends aiming not only to thrive but also to enhance in such a rapidly evolving digital age, and to keep up its telemarketing services with the client’s expectations worldwide.</p>
            </section>

            <section className="my-5">
                <h2 className="text-white">History</h2>
                <p className="fs-4 text-wrap">As the leading company in the telemarketing industry with a passion for innovation and excellence, LeadX Bull has become a household name in the tele sales world, known for its groundbreaking lead generation and digital sales services.</p>
            </section>
            <section className="d-flex justify-content-between my-5 ">
                <div className='col-8'>
                    <h2 className="text-white">Profile</h2>
                    <p className="fs-4 text-wrap">LeadX Bull Global Online leads and sales orders account for over 65% of the total announced digital sales volume in Canada, Directly and in affiliation and partnership contracts. Total $4 Million Gross Sales Revenue Globally - 2023</p>


                    <div className='d-flex my-4'>
                        <h4 className={styles.title}>Mission</h4>
                        <p className={styles.content}>Our mission is to be the leading innovator in the telemarketing industry through our cloud based Lead-Gen solutions</p>
                    </div>

                    <div className='d-flex'>
                        <h4 className={styles.title}>Vission</h4>
                        <p className={styles.content}>We enhance our data centers to personalize the contractor clients experience through telemarketing</p>
                    </div>



                    <div className='d-flex my-4'>
                        <h4 className={styles.title}>Value</h4>
                        <p className={styles.content}>Our core values include elimination of privacy concerns, and adherence to global marketing regulations</p>
                    </div>

                </div>
                <div className='col-4'>
                    <img src={person} alt='person' width={"85%"} />
                </div>
            </section >

            <section className="col-8 d-flex flex-column align-items-center my-5 ">
                <h3 className="text-white">Key Service</h3>
                <h2 className="text-white">Benefits</h2>
                <div className='d-flex justify-content-between flex-wrap'>
                    <div className={`${styles.benefits} d-flex flex-column justify-content-center align-items-center`}>
                        <h4 className="text-white">asaSasAS</h4>
                        <progress className="w-100" value="50" max="100" />
                        <p>aadsjklkjadsfklajfdkasjdkjask;dj</p>
                    </div>
                    <div className={`${styles.benefits} d-flex flex-column justify-content-center align-items-center`}>
                        <h4 className="text-white">asaSasAS</h4>
                        <progress className="w-100" value="50" max="100" />
                        <p>aadsjklkjadsfklajfdkasjdkjask;dj</p>
                    </div>
                    <div className={`${styles.benefits} d-flex flex-column justify-content-center align-items-center`}>
                        <h4 className="text-white">asaSasAS</h4>
                        <progress className="w-100" value="50" max="100" />
                        <p>aadsjklkjadsfklajfdkasjdkjask;dj</p>
                    </div>
                    <div className={`${styles.benefits} d-flex flex-column justify-content-center align-items-center`}>
                        <h4 className="text-white">asaSasAS</h4>
                        <progress className="w-100" value="50" max="100" />
                        <p>aadsjklkjadsfklajfdkasjdkjask;dj</p>
                    </div>
                </div>
            </section >

            <section className="col-12 d-flex flex-column align-items-center my-5 bg-danger">
                <h2 className="text-white">Benefits</h2>
                <h5 className="text-white">Benefits</h5>
                <p>aadsjklkjadsfklajfdkasjdkjask;dj</p>
                <div className='col-12 p-3 d-flex justify-content-center align-content-center bg-success text-center'>
                    <p className='col-3 align-center'>75</p>
                    <p className='col-3 align-center'>25</p>
                    <p className='col-3 align-center'>15</p>
                    <p className='col-3 align-center'>15</p>
                </div>

            </section>
        </div >
    );
}

export default AboutScreen;
