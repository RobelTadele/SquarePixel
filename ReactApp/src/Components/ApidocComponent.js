import React from 'react'
import API_endpoint from './APIendpoints'

const ApidocComponent = () => {
  return (
    <div>
        <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Method</th>
      <th scope="col">Path</th>
      <th scope="col">Response</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>GET</td>
      <td>{API_endpoint.portfolio}</td>
      <td>Response</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>GET</td>
      <td>{API_endpoint.Samsportfolio}</td>
      <td>Response</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>POST</td>
      <td>{API_endpoint.uploads}</td>
      <td>Coming Soon</td>
    </tr>
   
  </tbody>
</table>
    </div>
  )
}

export default ApidocComponent