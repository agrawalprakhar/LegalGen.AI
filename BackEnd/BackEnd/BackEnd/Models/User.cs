using System.ComponentModel.DataAnnotations;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace BackEnd.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        public string Organization { get; set; }
        public string ContactDetails { get; set; }

        // Navigation property for one-to-many relationship with ResearchBook
        public List<ResearchBook> ResearchBooks { get; set; }

        // Navigation property for one-to-many relationship with SearchQuery
        public List<SearchQuery> SearchQueries { get; set; }

        // Navigation property for one-to-many relationship with ChatInteraction
        public List<ChatInteraction> ChatInteractions { get; set; }

    }
}
