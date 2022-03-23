export const getStaticPaths = async () => {
  const res = await fetch('https://edu-servers.herokuapp.com/school');
  const data = await res.json();

  const paths = data.map(school => {
    return {
      params: { id: school.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://edu-servers.herokuapp.com/school/' + id);
  const data = await res.json();

  return {
    props: { school: data }
  }
}

const Details = ({ school }) => {
  return (
    <div>
      <ul className="subjectList">
      <a href={'/school/subjects/' + school.grade_subjects[0].id}>{school.grade_subjects[0].name}</a>
      <a href={'/school/subjects/' + school.grade_subjects[1].id}>{school.grade_subjects[1].name}</a>
      <a href={'/school/subjects/' + school.grade_subjects[2].id}>{school.grade_subjects[2].name}</a>
      <a href={'/school/subjects/' + school.grade_subjects[3].id}>{school.grade_subjects[3].name}</a>
      <a href={'/school/subjects/' + school.grade_subjects[4].id}>{school.grade_subjects[4].name}</a>
      <a href={'/school/subjects/' + school.grade_subjects[5].id}>{school.grade_subjects[5].name}</a>
      <a href={'/school/subjects/' + school.grade_subjects[6].id}>{school.grade_subjects[6].name}</a>
      <a href={'/school/subjects/' + school.grade_subjects[7].id}>{school.grade_subjects[7].name}</a>
      <a href={'/school/subjects/' + school.grade_subjects[8].id}>{school.grade_subjects[8].name}</a>
      <a href={'/school/subjects/' + school.grade_subjects[9].id}>{school.grade_subjects[9].name}</a>
      </ul>
      
      
      
    </div>
  );
}

export default Details;