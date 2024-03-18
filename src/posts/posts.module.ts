import { Module, forwardRef } from '@nestjs/common'
import { PostRepository, PostsService } from './services/posts.service'
import { AuthorsModule } from 'src/authors/authors.module'

@Module({
  imports: [forwardRef(() => AuthorsModule)],
  providers: [PostsService, PostRepository],
  exports: [PostsService]
})
export class PostsModule {}
