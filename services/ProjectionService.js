
import { MyHTTPConnection } from '../global/MyHTTPConnection.js';
import { Projection } from '../models/ProjectionModel.js';

export class ProjectionService {
  static async getProjection(academicPeriod) {
    const response = await fetch(MyHTTPConnection.HTTP_URL + 'projection/' + academicPeriod);
    const data = await response.json();
    return data.map(projection => new Projection(projection));
  }
}