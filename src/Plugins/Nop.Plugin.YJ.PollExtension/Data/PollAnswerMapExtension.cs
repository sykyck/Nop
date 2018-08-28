using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Nop.Data.Mapping;
using Nop.Plugin.YJ.PollExtension.Domain;

namespace Nop.Plugin.YJ.PollExtension.Data
{
    public partial class PollAnswerMap : NopEntityTypeConfiguration<PollAnswer>
    {
        public PollAnswerMap()
        {
        }
        #region
        /// <summary>
        /// Configures the entity
        /// </summary>
        /// <param name="builder">The builder to be used to configure the entity</param>
        public override void Configure(EntityTypeBuilder<PollAnswer> builder)
        {
            builder.ToTable(nameof(PollAnswer));
            builder.Property(pollAnswer => pollAnswer.AnswerImage).IsRequired();
            builder.Property(pollAnswer => pollAnswer.pollProductId).IsRequired();
            base.Configure(builder);
        }

        #endregion
    }
}
