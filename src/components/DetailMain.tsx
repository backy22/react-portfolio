import arrow from "../img/arrow.svg";

interface ProjectMain {
  title: string;
  type: string;
  weblink: string;
  githublink: string;
  mainimg: string;
}

interface DetailMainProps {
  projectmain: ProjectMain;
}

const DetailMain = ({ projectmain }: DetailMainProps) => {
  return (
    <section className="detailmain">
      <div className="detailmain-flexbox">
        <div className="detailmain-box">
          <div className="detailmain-box-text">
            <h1>{projectmain.title}</h1>
            <p>{projectmain.type}</p>
            <div>
              <a href={projectmain.weblink} target='blank'><button>VIEW LIVE</button></a>
              <a href={projectmain.githublink} target='blank'><button>VIEW CODE</button></a>
            </div>
          </div>
        </div>
        <div className="detailmain-box">
          <div className="detailmain-box-image wow fadeInRight">
            <img src={projectmain.mainimg} alt="main" />
          </div>
        </div>
      </div>
      <div className="arrow">
        <a href="#overview"><img src={arrow} alt="arrow icon"/></a>
      </div>
    </section>
  );
};

export default DetailMain; 