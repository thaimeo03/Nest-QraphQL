import { Injectable } from '@nestjs/common'
import { Post } from '../models/post.model'
import { AuthorRepository } from 'src/authors/services/authors.service'

interface IPostRepository {
  findAll({ authorId }: { authorId: number }): Post[]
}

export class PostRepository implements IPostRepository {
  private posts: Post[] = []

  constructor(private readonly authorRepository: AuthorRepository) {}

  findAll({ authorId }: { authorId: number }): Post[] {
    return this.authorRepository.findOneById(authorId).posts
  }
}

@Injectable()
export class PostsService {
  constructor(private readonly postRepository: PostRepository) {}

  findAll(id: number) {
    return this.postRepository.findAll({ authorId: id })
  }
}
