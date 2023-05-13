import overView from "../json/Overview.json";
import data from "../json/Data.json";


type Props = {
toggleIsActive: boolean;
}



const Cards : React.FC<Props> = ({toggleIsActive})  => {

  return (
    <>
      <section className="section-cards">
        {data &&
          data.map((element) => {
            return (
              <div key={element.id} className={element.card}>
                <div className={toggleIsActive ? "card dark" : "card"}>
                  <div className="card-header">
                    <div className={element.imgSocial} />
                    <h5>{element.user}</h5>
                  </div>
                  <h1>{element.followers}</h1>
                  <h5>
                    <span>{element.subtitle}</span>
                  </h5>
                  <div className="card-footer ">
                    <div className={element.imgFooter} />
                    <h5 className={element.error}>{element.today}</h5>
                  </div>
                </div>
              </div>
            );
          })}
      </section>

      <div className="title">
        <h1>Overview-Today</h1>
      </div>

      <section className="section-box">
        {overView &&
          overView.map((element) => {
            return (
              <div key={element.id} className={toggleIsActive ?"box dark " : "box"}>
                <div className="box-header">
                  <h3> {element.title}</h3>
                  <div className={element.imgSocial} />
                </div>
                <div className="box-footer">
                  <h1> {element.views}</h1>
                  <div className={element.error ? "porcent-error" : "porcent"}>
                    <div className={element.imgFooter} />
                    <h5>{element.porcent}</h5>
                  </div>
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default Cards;
