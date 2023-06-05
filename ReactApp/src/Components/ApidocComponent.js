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
      <th scope="row">1. Get all Images</th>
      <td>GET</td>
      <td>{API_endpoint.portfolio}</td>
      <td>Coming Soon</td>
    </tr>
    <tr>
      <th scope="row">2. Get all Images from Sams Collection</th>
      <td>GET</td>
      <td>{API_endpoint.SamsCollection}</td>
      <td>Coming Soon</td>
    </tr>
    <tr>
      <th scope="row">3. Get a set of n images</th>
      <td>GET</td>
      <td>{API_endpoint.limitedPortfolio}/n</td>
      <td>Coming Soon</td>
    </tr>
    <tr>
      <th scope="row">4. Contribute to Square Pixel</th>
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