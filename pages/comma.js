import TopNav from '../component/TopNav'

export default function comma(){
  return (
    <>
    <TopNav />
    <main>
      <div className="commatest">img</div>
      <div className="comma_container">
        <div className="comma_option">
          <img src="http://127.0.0.1:8899/public/option1.png" style={{maxWidth:"100%"}} width="100"/>
          option
        </div>
        <div className="comma_option">option</div>
        <div className="comma_combine">combine</div>
        <div className="comma_option">option</div>
        <div className="comma_option">option</div>
      </div>

    </main>
    </>
  );
}