import { Module } from '@nestjs/common'
import { PostRepository, PostsService } from './services/posts.service'
import { AuthorsModule } from 'src/authors/authors.module'

@Module({
  imports: [AuthorsModule],
  providers: [PostsService, PostRepository]
})
export class PostsModule {}
