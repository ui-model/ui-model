import { InMemoryDbService } from 'angular-in-memory-web-api';
import { users } from './users';
export class MockDbService implements InMemoryDbService {
  createDb(): {} {
    return {users};
  }
}
