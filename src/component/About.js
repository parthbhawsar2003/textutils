import React from 'react'

function About(props) {
  return (
   <>
   <div className="container" >
   <div className="accordion"   id="accordionExample">
    <h1>About Us</h1>
  <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'black'}}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={{backgroundColor: props.mode==='dark'?'gray':'white' ,color: props.mode==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion 1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi voluptate eveniet error, nulla minus provident culpa ad praesentium qui consectetur tenetur adipisci laborum beatae officia, voluptates totam possimus? Quam voluptates, esse officia molestias eaque voluptatibus alias ratione amet nam error!</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'black'}}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'black'}}type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion 2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, neque enim sapiente pariatur officia nemo? A veritatis aperiam, nobis fugiat labore at alias esse nemo possimus necessitatibus architecto, temporibus expedita praesentium cumque nostrum repellat optio hic id nam laboriosam incidunt illo distinctio. Inventore, reprehenderit vel! Quaerat sunt ipsam sit fugiat commodi cumque!</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'black'}}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'black',border:props.mode==='dark'?'black':'black'}}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordation 3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsam, vel voluptatum est inventore placeat voluptate itaque ducimus molestiae cum velit accusantium sunt at in neque modi! Optio dignissimos doloremque rerum harum illo necessitatibus placeat commodi? Eveniet consequuntur delectus quis commodi rerum saepe nobis deleniti sed eum repellat. Ullam, fugit.</strong> 
      </div>
    </div>
  </div>
</div>
</div>  
   </>
  )
}

export default About
