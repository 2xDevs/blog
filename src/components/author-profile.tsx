'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon, BookOpen, ThumbsUp } from "lucide-react"

export function AuthorProfile() {
  // This data would typically come from your backend or CMS
  const author = {
    name: "Jane Doe",
    avatar: "/placeholder.svg?height=400&width=400",
    bio: "Frontend developer passionate about creating beautiful and functional user interfaces. I love exploring new web technologies and sharing my knowledge through blog posts.",
    github: "https://github.com/janedoe",
    linkedin: "https://linkedin.com/in/janedoe",
    totalBlogs: 15,
    totalLikes: 230,
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="overflow-hidden">
        <CardHeader className="pb-0">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="w-32 h-32 md:w-48 md:h-48">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <CardTitle className="text-3xl md:text-4xl mb-2">{author.name}</CardTitle>
              <div className="flex justify-center md:justify-start space-x-4 mb-4">
                <Button variant="outline" size="icon" asChild>
                  <a href={author.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href={author.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </Button>
              </div>
              <div className="flex justify-center md:justify-start space-x-4">
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {author.totalBlogs} Blogs
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  {author.totalLikes} Likes
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="mt-6">
          <p className="text-muted-foreground">{author.bio}</p>
        </CardContent>
      </Card>
    </div>
  )
}