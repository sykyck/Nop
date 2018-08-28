using System;
using System.Collections.Generic;
using System.Text;
using Nop.Core;

namespace Nop.Plugin.YJ.PollExtension.Domain
{
    public partial class PollAnswer : BaseEntity
    {
        public string AnswerImage { get; set; }
        public int pollProductId { get; set; }
    }
}
