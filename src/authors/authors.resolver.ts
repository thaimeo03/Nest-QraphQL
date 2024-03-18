import { Args, Int, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Author } from './models/author.model'
import { AuthorsService } from './services/authors.service'
import { PostsService } from 'src/posts/services/posts.service'

@Resolver((of) => Author)
export class AuthorsResolver {
  constructor(
    private readonly authorsService: AuthorsService,
    private readonly postsService: PostsService
  ) {}

  @Query((returns) => Author)
  async authors(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.findOneById(id)
  }

  @ResolveField()
  async posts(@Parent() author: Author) {
    const { id } = author
    return this.postsService.findAll(id)
  }
}
