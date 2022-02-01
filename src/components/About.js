function About({ about, image = "https://via.placeholder.com/215" }) {
  //   console.log(props)
  return (
    <aside>
      <img src={image} alt="blog logo"></img>
      <p>{about}</p>
    </aside>
  )
}

export default About
