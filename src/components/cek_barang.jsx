const CekBarang = ({ data }) => {
  console.log(data);
  if (data && JSON.stringify(data) != "[]") {
    return (
      <section>
        <p>{data[0].item_name}</p>
        <p>{data[0].sender}</p>
        <p>{data[0].recipient}</p>
        {data[0].history.map((item, idx) => (
          <div key={idx} className="mb-4 border w-fit p-4 shadow-md rounded-sm">
            <p>{item.date}</p>
            <p>{item.location}</p>
            <p>{item.notes}</p>
            <p>{item.status}</p>
          </div>
        ))}
      </section>
    );
  }
};

export default CekBarang;
