using System;
using System.Collections.Generic;
using System.Text;
using Nop.Plugin.YJ.PollExtension.Domain;

namespace Nop.Plugin.YJ.PollExtension.Services
{
    public interface IPollExtensionService
    {
        void GetPollRecord(PollAnswer record);

        void AddPollRecord(PollAnswer record);

        void DeletePollRecord(PollAnswer record);

        void UpdatePollRecord(PollAnswer record);
    }
}
