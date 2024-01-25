import fetchData from "./utilities/fetchLocalData.js"
import get from "./utilities/getElement.js"

const renderCoursesSection = async () => {
  const coursesDOM = get(".courses")
  const coursesData = await fetchData("./data/courses.json")
  const coursesHTML = coursesData
    .map((course) => {
      return `<!-- single course -->
  <article class="course">
    <!-- card image -->
    <div class="card-img">
      <img
        src=${course.img}
        alt=""
        class="img"
      />
    </div>
    <!-- card info -->
    <div class="card-body">
      <div class="card-info">
        <p class="course-name">${course.name}</p>
        <p class="course-status">${course.status}</p>
      </div>
      <div class="course-details">
        <img
          src="./images/arrow-right.svg"
          alt="blue arrow right"
        />
        <a href=${course.detailsUrl} target="_blank">კურსის დეტალები</a>
      </div>
    </div>
  </article>
  <!-- end of single course -->`
    })
    .join("")

  coursesDOM.innerHTML = coursesHTML
}
export default renderCoursesSection
