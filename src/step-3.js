function Step3({ data }) {
  return (
    <div className="step-one">
      <h2>Step ( 3 )</h2>
      <p>Here is the your information, review and confirm!</p>
      <table>
        <tbody>
          <tr>
            <th>First Name:</th>
            <td>{data.firstName}</td>
          </tr>
          <tr>
            <th>Last Name:</th>
            <td>{data.lastName}</td>
          </tr>

          <tr>
            <th>Age:</th>
            <td>{data.age}</td>
          </tr>
        </tbody>
      </table>

      <button type="submit">Confirm</button>
    </div>
  );
}

export default Step3;
