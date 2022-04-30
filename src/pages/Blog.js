

// ----------------------------------------------------------------------



// ----------------------------------------------------------------------
import './blog.scss'
export default function Blog() {
  return (
<div class="container">
  
  <div class="avatar-flip">
    <img src="http://media.idownloadblog.com/wp-content/uploads/2012/04/Phil-Schiller-headshot-e1362692403868.jpg" height="150" width="150"/>
    <img src="http://i1112.photobucket.com/albums/k497/animalsbeingdicks/abd-3-12-2015.gif~original" height="150" width="150"/>
  </div>
  <h4>member state:<spin class='state'>active</spin></h4>
  <div className='memberInfo'>
 

      <div className='right-div'>
      <h2 className='h2'>name:<span>ahmed mohamed</span></h2>
  <h2 className='h2'>User ID: <span>55952265</span></h2>
  <h2 className='h2'>gender:<span>male</span></h2>
  <h2 className='h2'>age:<span>25</span></h2>

      </div>

  <div class="vl"></div>
<div className='secondInfo'>

<h4 className='h4'>email:<spin>xevat12101@svcache.com</spin></h4>
 <h4 className='h4'>phone number:<spin>07775000</spin></h4>
<h4 className='h4'> weight:<spin>120</spin> kgm</h4>
<h4 className='h4'>height:<spin>180</spin> cm</h4>

</div>


  </div>

 <div class='info'>

 </div>
 
</div>

  );
}
