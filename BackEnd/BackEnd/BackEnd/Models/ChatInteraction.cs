using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class ChatInteraction
    {
        [Key]
        public int Id { get; set; }

        // Foreign Key and navigation property for the relationship with User
        [ForeignKey("User")]
        public int UserId { get; set; }
        public User User { get; set; }

        [Required]
        public string Message { get; set; }

        [Required]
        public DateTime DateTime { get; set; }
    }
}
