using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace PracticaFinalAdrian.Models;

public partial class PracticafinalContext : DbContext
{
    public PracticafinalContext()
    {
    }

    public PracticafinalContext(DbContextOptions<PracticafinalContext> options)
        : base(options)
    {
    }

    public virtual DbSet<PersonaItem> PersonaItems { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB; DataBase=Practicafinal;Integrated Security=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<PersonaItem>(entity =>
        {
            entity.ToTable("PersonaItem");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
