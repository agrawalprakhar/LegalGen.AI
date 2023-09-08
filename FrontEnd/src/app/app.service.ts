import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private resultsSource = new BehaviorSubject([]);
  currentResults = this.resultsSource.asObservable();

  endPointUrl: string;

  constructor(private http: HttpClient) {
    this.endPointUrl = 'http://52.204.3.226/api';
  }

  // To get Response from Query form
  sendResponse(response:any) {
    this.resultsSource.next(response)
  }

  /**
   * Get search metadata
   * @param name field type
   * @param query searched query from field
   */
  getSearchMetaData(name: string, query: string[]) {
    return this.http.get(`${this.endPointUrl}/search-metadata?` + `name=${name}` + `&query=${query}`);
  }

  /**
   * Get default metadata
   * @param allQueries
   */
  getDefaultMetaData(allQueries: string[]) {
    const updatedQueries = allQueries.filter(empty => empty);
    const queries = { "queries": updatedQueries };
    return this.http.post(`${this.endPointUrl}/get-metadata`, queries);
  }

  /**
   * Get updated metadata for Dropdown list 
   * @param searchMetadataBody
   */
  getMetadataForFields(searchMetadataBody:any) {
    return this.http.post(`${this.endPointUrl}/search-metadata`, searchMetadataBody);
  }
}