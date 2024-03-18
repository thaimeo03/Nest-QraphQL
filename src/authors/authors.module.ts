import { Module, forwardRef } from '@nestjs/common'
import { AuthorRepository, AuthorsService } from './services/authors.service'
import { AuthorsResolver } from './authors.resolver'
import { PostsModule } from 'src/posts/posts.module'

@Module({
  imports: [forwardRef(() => PostsModule)],
  providers: [AuthorsService, AuthorsResolver, AuthorRepository],
  exports: [AuthorsService]
})
export class AuthorsModule {}
