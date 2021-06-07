import ProfilePhoto from ".component/profile/ProfilePhoto";
import FullName from ".component/profile/FullName";
import Address from ".component/profile/Address";
function App() {
  return (
    <>
    <div className="container">
      <ProfilePhoto />
      <div>
        <FullName/>
        <Address/>
      </div>
    </div>
    </>
  );
}

export default App;
