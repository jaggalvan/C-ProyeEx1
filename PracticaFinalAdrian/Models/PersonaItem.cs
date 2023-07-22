using System;
using System.Collections.Generic;

namespace PracticaFinalAdrian.Models;

public partial class PersonaItem
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string Description { get; set; } = null!;

    public string? IsCompleted { get; set; }
}
