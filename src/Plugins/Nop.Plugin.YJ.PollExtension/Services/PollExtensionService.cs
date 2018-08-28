using System;
using System.Collections.Generic;
using System.Text;
using Nop.Plugin.YJ.PollExtension.Domain;
using Nop.Core.Data;

namespace Nop.Plugin.YJ.PollExtension.Services
{
    public class PollExtensionService : IPollExtensionService
    {
        private readonly IRepository<PollAnswer> _yPollRepository;

        public void GetPollRecord(PollAnswer record)
        {
            _yPollRepository.GetById(record);
        }

        public void AddPollRecord(PollAnswer record)
        {
            _yPollRepository.Insert(record);
        }

        public void DeletePollRecord(PollAnswer record)
        {
            _yPollRepository.Delete(record);
        }

        public void UpdatePollRecord(PollAnswer record)
        {
            _yPollRepository.Update(record);
        }
    }
}
