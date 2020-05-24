using Microsoft.EntityFrameworkCore;

namespace backend.Models{

    public class ContentContext : DbContext{
        public ContentContext(DbContextOptions<ContentContext> options):base(options){}

        public DbSet<backend.Models.Content> Content {get; set;}
    }
}