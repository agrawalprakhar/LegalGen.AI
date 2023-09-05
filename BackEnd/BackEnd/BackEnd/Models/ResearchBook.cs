using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.Models
{
    public class ResearchBook
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public DateTime DateCreated { get; set; }

        [Required]
        public DateTime LastModified { get; set; }

        // Foreign Key and navigation property for the relationship with User
        [ForeignKey("User")]
        public int UserId { get; set; }
        public User User { get; set; }

        // Navigation property for one-to-many relationship with LegalInformation
        public List<LegalInformation> LegalInformation { get; set; }
    }
}
