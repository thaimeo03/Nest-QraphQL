import { Injectable } from '@nestjs/common'
import { Author } from '../models/author.model'

interface IAuthorRepository {
  findOneById(id: number): void
}

export class AuthorRepository implements IAuthorRepository {
  private authors: Author[] = []

  findOneById(id: number) {
    return this.authors.find((author) => author.id === id)
  }
}

@Injectable()
export class AuthorsService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  findOneById(id: number) {
    return this.authorRepository.findOneById(id)
  }
}
