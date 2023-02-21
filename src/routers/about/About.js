import './About.css';

const IMG_SRC = 'https://ridenext.co.in/img/aboutus.jpg';

function About() {
    return(
        <div className='about-container'>
            <div className='image-container'>
                <img 
                    src={IMG_SRC}
                    alt='about us'
                    className='aboutus-image'
                />
            </div>
            <div className='about-text'>
                <p>
                    EmTekSolutions, is an IT development, services and products firm. The company specializes in ERP Tools like SAP, People Soft, Data warehousing, Decision support, OLAP, Business intelligence systems, mobile apps and web development that help all sizes of businesses turn their data into powerful information centers.
                </p>
                <p>
                    We are also associated in the marketing and distribution of software manufactured/developed by other computer firms. We perform various IT related services to our clients, including product development with respect to computer and informational requirements, creating original computer hardware systems (including both local area networks and intranets), updating and modifying existing programs and systems.
                </p>
                <p>
                    The potential and existing range of our clients is vast. We intend to provide above detailed service to research institutions, several high-tech concerns including those of telecommunications, entertainment industry, engineering firms, large financial institutions such as investment banks and management consulting firms, governmental agencies and medium-scale businesses needing computerization of their operations.
                </p>
                <p>
                    The success of our company would be a function of our ability to provide high quality services and products to our clients. Our skilled professionals, especially programmers, have substantial theoretical knowledge in the field of computer sciences and/or related fields such as electronics and communication engineering; they should also possess highly refined skills to translate and implement theoretical principles into practical applications. The essential and all-pervasive dynamics in the field of computer sciences, product development and related information technology field are occurrence of rapid changes and technology developments. An IT development firm, which cannot come in terms with such dynamics, is almost certain to fail in the space age Darwinism of regeneration, adaptation, change and progress. For our company to be competitive and enlarge our market share, we have to constantly move to the outer frontier of the technology curve in the field of computer sciences and information technology. Our ability to design and implement computer programs, which meet the ever-changing needs of the marketplace, is almost completely dependent on the ability of our programmers to quickly grasp the logic and the architecture of new computer languages, application packages and hardware.
                </p>
            </div>
        </div>
    )
}

export default About;
